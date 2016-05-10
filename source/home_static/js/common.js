/**
 * Created by wuquan on 2016/5/10.
 */
(function(window,$,undefined){
    var Ajax = {

        action : function(system, action, data, callback){
            $.ajax({
                type     :  "POST",
                url      :  "/app",
                data     :  data,
                dataType :  "json",
                headers  : {
                    'sys'    : system,
                    'type'   : action,
                    'appKey' : 'd1efc217bc816feeed3d0524cc3b8ecd' ,
                    'appSercret' : '2/GIAD798eD92L8QkLEQqQ'
                },
                success  : callback
            })
        }

    };
    window.Ajax = Ajax;
})(window,jQuery);
