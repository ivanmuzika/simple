﻿define(['plugins/router', 'constants', 'modules/questionsNavigation', 'viewmodels/questions/multipleSelect/multipleSelect', 'viewmodels/questions/singleSelectText/singleSelectText', 'viewmodels/questions/fillInTheBlank/fillInTheBlank', 'viewmodels/questions/dragAndDrop/dragAndDrop', 'viewmodels/questions/singleSelectImage/singleSelectImage', 'viewmodels/questions/textMatching/textMatching', 'viewmodels/questions/statement/statement'],
	function(router, constants, navigationModule, multipleSelectQuestionViewModel, singleSelectTextQuestionViewModel, fillInTheBlankQuestionViewModel, dragAndDropQuestionViewModel, singleSelectImageQuestionViewModel, textMatchingViewModel, statementViewModel) {
	    "use strict";

	    var viewModel = {
	        objectiveId: null,
	        question: null,

	        title: '',
	        isAnswered: ko.observable(false),
	        isCorrect: ko.observable(false),
	        isExpanded: ko.observable(true),

	        learningContents: [],
	        correctFeedback: ko.observable(null),
	        incorrectFeedback: ko.observable(null),

	        navigationContext: null,

	        activeQuestionViewModel: null,

	        toggleExpand: toggleExpand,
	        submit: submit,
	        tryAnswerAgain: tryAnswerAgain,

	        navigateNext: navigateNext,
	        navigateNextText: navigateNextText,

	        activate: activate
	    };

	    viewModel.isCorrectAnswered = ko.computed(function () {
	        return viewModel.isAnswered() && viewModel.isCorrect();
	    });

	    viewModel.isWrongAnswered = ko.computed(function () {
	        return viewModel.isAnswered() && !viewModel.isCorrect();
	    });

	    return viewModel;

	    function navigateNext() {
	        var nextUrl = !_.isNullOrUndefined(viewModel.navigationContext.nextQuestionUrl) ? viewModel.navigationContext.nextQuestionUrl : 'objectives';
	        router.navigate(nextUrl);
	    }

	    function navigateNextText() {
	        return !_.isNullOrUndefined(viewModel.navigationContext.nextQuestionUrl) ? 'Next question' : 'Home';
	    }

	    function toggleExpand() {
	        return viewModel.isExpanded(!viewModel.isExpanded());
	    }

	    function submit() {
	        return viewModel.activeQuestionViewModel.submit().then(function () {
	            viewModel.isAnswered(viewModel.question.isAnswered);
	            viewModel.isCorrect(viewModel.question.isCorrectAnswered);
	        });
	    }

	    function tryAnswerAgain() {
	        return viewModel.activeQuestionViewModel.tryAnswerAgain().then(function () {
	            viewModel.isAnswered(false);
	        });
	    }

	    function setActiveViewModel(question) {
	        switch (question.type) {
	            case constants.questionTypes.multipleSelect:
	                return multipleSelectQuestionViewModel;
	            case constants.questionTypes.dragAndDrop:
	                return dragAndDropQuestionViewModel;
	            case constants.questionTypes.singleSelectText:
	                return singleSelectTextQuestionViewModel;
	            case constants.questionTypes.fillInTheBlank:
	                return fillInTheBlankQuestionViewModel;
	            case constants.questionTypes.singleSelectImage:
	                return singleSelectImageQuestionViewModel;
	            case constants.questionTypes.textMatching:
	                return textMatchingViewModel;
	            case constants.questionTypes.statement:
	                return statementViewModel;
	            default:
	                return multipleSelectQuestionViewModel;
	        }
	    }

	    function activate(objectiveId, question) {
	        viewModel.objectiveId = objectiveId;
	        viewModel.question = question;

	        viewModel.navigationContext = navigationModule.getNavigationContext(viewModel.objectiveId, viewModel.question.id);
	        viewModel.title = viewModel.question.title;
	        viewModel.isAnswered(viewModel.question.isAnswered);
	        viewModel.isCorrect(viewModel.question.isCorrectAnswered);

	        viewModel.learningContents = viewModel.question.learningContents;
	        viewModel.correctFeedback(viewModel.question.feedback.correct);
	        viewModel.incorrectFeedback(viewModel.question.feedback.incorrect);

	        viewModel.activeQuestionViewModel = setActiveViewModel(viewModel.question);
	        return viewModel.activeQuestionViewModel.initialize(viewModel.question);
	    }
	}
);