$(document).ready(function() {

  var saveStorage = function(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  };

  var getStorage = function(key) {
    var obj = localStorage.getItem(key);
    return JSON.parse(obj);
  };
  var add = function() {
    var body = $("#memo-form .form-control").val();
    saveMemo(body);
  };

  var STORAGE_KEY = 'memoObj';
  var saveMemo = function(body) {
    var memoObj = body;
    saveStorage(STORAGE_KEY, memoObj);
    $("#memo-area").append('<p>' + memoObj + '</p>');
  }

  var resetMemo = function() {
    $("#memo-area").children().remove();
    window.localStorage.clear();
  }

  $("#btn-add").on('click', function() {
    add();
  });1

  $("#btn-delete").on('click', function() {
    resetMemo();
  });

  new Vue({
    el: '#memo-form',
    data: {
      input: '# any thoughts?'
    },
    computed: {
      compiledMarkdown: function() {
        return marked(this.input, { sanitize: true})
      }
    },
    methods: {
      update: _.debounce(function(e) {
        this.input = e.target.value
      }, 300)
    }
  })
})
