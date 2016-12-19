System.register(['bootstrap', 'aurelia-framework', 'AuthService', './todo'], function (_export) {
  'use strict';

  var inject, AuthService, Todo, App, ToJSONValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_AuthService) {
      AuthService = _AuthService['default'];
    }, function (_todo) {
      Todo = _todo.Todo;
    }],
    execute: function () {
      App = (function () {
        function App(AuthService) {
          _classCallCheck(this, _App);

          this.auth = AuthService;
          this.heading = "Varun's To Do List";
          this.todos = [];
          this.todoDescription = '';
          this.currentDate = new Date();
        }

        _createClass(App, [{
          key: 'addTodo',
          value: function addTodo() {
            if (this.todoDescription) {
              this.todos.push(new Todo(this.todoDescription));
              this.todoDescription = '';
            }

            if (this.todoPriority) {
              this.todos.push(new Todo(this.todoPriority));
              this.todoPriority = '';
            }
          }
        }, {
          key: 'removeTodo',
          value: function removeTodo(todo) {
            var index = this.todos.indexOf(todo);
            if (index !== -1) {
              this.todos.splice(index, 1);
            }
          }
        }]);

        var _App = App;
        App = inject(AuthService)(App) || App;
        return App;
      })();

      _export('App', App);

      ToJSONValueConverter = (function () {
        function ToJSONValueConverter() {
          _classCallCheck(this, ToJSONValueConverter);
        }

        _createClass(ToJSONValueConverter, [{
          key: 'toView',
          value: function toView(obj) {
            if (obj) {
              return JSON.stringify(obj, null, 2);
            }
          }
        }]);

        return ToJSONValueConverter;
      })();

      _export('ToJSONValueConverter', ToJSONValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUNBTWEsR0FBRyxFQWdDSCxvQkFBb0I7Ozs7Ozs7O2lDQXJDeEIsTUFBTTs7OzttQkFFUCxJQUFJOzs7QUFHQyxTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLFdBQVcsRUFBRTs7O0FBQ3hCLGNBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQW9CLENBQUM7QUFDcEMsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDMUIsY0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQy9COztxQkFSVSxHQUFHOztpQkFVTCxtQkFBRztBQUNWLGdCQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDeEIsa0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGtCQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzthQUMzQjs7QUFFQyxnQkFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3ZCLGtCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUM3QyxrQkFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7YUFDeEI7V0FDRjs7O2lCQUdXLG9CQUFDLElBQUksRUFBRTtBQUNqQixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsZ0JBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ2hCLGtCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDN0I7V0FDRjs7O21CQTVCVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDUCxHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7Ozs7O0FBZ0NILDBCQUFvQjtpQkFBcEIsb0JBQW9CO2dDQUFwQixvQkFBb0I7OztxQkFBcEIsb0JBQW9COztpQkFDekIsZ0JBQUMsR0FBRyxFQUFFO0FBQ1YsZ0JBQUksR0FBRyxFQUFFO0FBQ1AscUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQ3BDO1dBQ0Y7OztlQUxVLG9CQUFvQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgQXV0aFNlcnZpY2UgZnJvbSAnQXV0aFNlcnZpY2UnO1xuaW1wb3J0IHtUb2RvfSBmcm9tICcuL3RvZG8nO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgY29uc3RydWN0b3IoQXV0aFNlcnZpY2UpIHtcbiAgXHR0aGlzLmF1dGggPSBBdXRoU2VydmljZTtcbiAgICB0aGlzLmhlYWRpbmcgPSBcIlZhcnVuJ3MgVG8gRG8gTGlzdFwiO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB0aGlzLnRvZG9EZXNjcmlwdGlvbiA9ICcnOyAgXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIH1cbiAgICBcbiAgICBhZGRUb2RvKCkge1xuICAgIGlmICh0aGlzLnRvZG9EZXNjcmlwdGlvbikge1xuICAgICAgdGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHRoaXMudG9kb0Rlc2NyaXB0aW9uKSk7XG4gICAgICB0aGlzLnRvZG9EZXNjcmlwdGlvbiA9ICcnO1xuICAgIH1cbiAgICAgIFxuICAgICAgaWYgKHRoaXMudG9kb1ByaW9yaXR5KSB7XG4gICAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG8odGhpcy50b2RvUHJpb3JpdHkpKTtcbiAgICAgIHRoaXMudG9kb1ByaW9yaXR5ID0gJyc7XG4gICAgfVxuICB9XG4gICAgXG4gIFxuICAgIHJlbW92ZVRvZG8odG9kbykge1xuICAgIGxldCBpbmRleCA9IHRoaXMudG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG4gICAgXG59XG5cbmV4cG9ydCBjbGFzcyBUb0pTT05WYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyhvYmopIHtcbiAgICBpZiAob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqLCBudWxsLCAyKVxuICAgIH1cbiAgfVxufSJdfQ==
