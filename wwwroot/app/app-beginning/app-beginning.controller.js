(function () {
	'use strict'

	angular
	 .module('appBeginning')
	 .controller('appBeginningController', appBeginningController)

	appBeginningController.$inject = ['$log']
	function appBeginningController ($log) {
		var vm = this

		vm.title = 'App Beginning'

		activate()

		function activate () {
			$log.log('App Beginning')
		}
	}
})()
