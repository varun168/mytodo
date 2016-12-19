System.register(['aurelia-framework', 'AuthService'], function (_export) {
  'use strict';

  var inject, AuthService, Login;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }],
    execute: function () {
      Login = (function () {
        function Login(AuthService) {
          var _this = this;

          _classCallCheck(this, _Login);

          this.login = function () {
            if (_this.username && _this.password) {
              AuthService.login(_this.username, _this.password);
            } else {
              _this.error = 'Please enter a username and password.';
            }
          };
        }

        _createClass(Login, [{
          key: 'activate',
          value: function activate() {
            this.username = '';
            this.password = '';
            this.error = '';
          }
        }]);

        var _Login = Login;
        Login = inject(AuthService)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyQkFJYSxLQUFLOzs7Ozs7OztpQ0FKVCxNQUFNOzs7OztBQUlGLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosV0FBVyxFQUFFOzs7OztBQUl2QixjQUFJLENBQUMsS0FBSyxHQUFHLFlBQU07QUFDakIsZ0JBQUksTUFBSyxRQUFRLElBQUksTUFBSyxRQUFRLEVBQUU7QUFDbEMseUJBQVcsQ0FBQyxLQUFLLENBQUMsTUFBSyxRQUFRLEVBQUUsTUFBSyxRQUFRLENBQUMsQ0FBQTthQUNoRCxNQUFNO0FBQ0wsb0JBQUssS0FBSyxHQUFHLHVDQUF1QyxDQUFDO2FBQ3REO1dBQ0YsQ0FBQTtTQUNGOztxQkFiVSxLQUFLOztpQkFlUixvQkFBRztBQUNULGdCQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1dBQ2pCOzs7cUJBbkJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIExvZ2luIHtcblxuICBjb25zdHJ1Y3RvcihBdXRoU2VydmljZSkge1xuXG4gICAgLy8gT3IsIGlmIHdlIHdhbnQgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgdG8gdGhlIGZ1bmN0aW9uLCBcbiAgICAvLyB3ZSBjYW4gY2FsbCBpdCB3aXRoaW4gYW5vdGhlciBtZXRob2Qgb24gb3VyIHZpZXcgbW9kZWwuXG4gICAgdGhpcy5sb2dpbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpIHtcbiAgICAgICAgQXV0aFNlcnZpY2UubG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSAnUGxlYXNlIGVudGVyIGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLic7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy51c2VybmFtZSA9ICcnO1xuICAgIHRoaXMucGFzc3dvcmQgPSAnJztcbiAgICB0aGlzLmVycm9yID0gJyc7XG4gIH1cbn1cbiJdfQ==
