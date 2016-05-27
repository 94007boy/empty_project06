/**
 * Created by xiaolv on 16/5/23.
 */
$(function(e){

    $(window).scroll(function (){
        var scrollTop = $(this).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {
            $(this).getMore(
                //{
                //    template: $('#js-topic-item-template').html(),
                //    timestamp: $(self).attr('timestamp'),
                //    url: 'http://test.w.xtche.com/port.php/Topic/getTopicIndex',
                //    callback: function(html) {
                //        $('.topic-item-container').removeClass('topic-list-loading-more');
                //        $('.topic-item-container').append(html);
                //        $('.topic-item-container').addClass('pxui-show-more-loading');
                //    }
                //}
            );
        }
    });

    $(document).on("click",".com-footer-nav > a",function(){
        var index = $(this).index();
        var img = $(this).children("img");
        switch (index){
            case 0:
                img.attr('src','index_icon_pre.png');
                $(".com-footer-nav a:nth-child(2)").children("img").attr('src','topic_icon_nor.png');
                $(".com-footer-nav a:nth-child(3)").children("img").attr('src','msg_icon_nor.png');
                $(".com-footer-nav a:nth-child(4)").children("img").attr('src','discover_topic_nor.png');
                break;
            case 1:
                $(".com-footer-nav a:nth-child(1)").children("img").attr('src','index_icon_nor.png');
                img.attr('src','topic_icon_pre.png');
                $(".com-footer-nav a:nth-child(3)").children("img").attr('src','msg_icon_nor.png');
                $(".com-footer-nav a:nth-child(4)").children("img").attr('src','discover_topic_nor.png');
                break;
            case 2:
                $(".com-footer-nav a:nth-child(1)").children("img").attr('src','index_icon_nor.png');
                $(".com-footer-nav a:nth-child(2)").children("img").attr('src','topic_icon_nor.png');
                img.attr('src','msg_icon_pre.png');
                $(".com-footer-nav a:nth-child(4)").children("img").attr('src','discover_topic_nor.png');
                break;
            case 3:
                $(".com-footer-nav a:nth-child(1)").children("img").attr('src','index_icon_nor.png');
                $(".com-footer-nav a:nth-child(2)").children("img").attr('src','topic_icon_nor.png');
                $(".com-footer-nav a:nth-child(3)").children("img").attr('src','msg_icon_nor.png');
                img.attr('src','discover_topic_pre.png');
                break;
        }
    })

    $(document).on("click",".tilte-tab > a",function(){
        $(this).parent().children('.selected').removeClass('selected');
        $(this).addClass('selected');
        var index = $(this).index();
    })

    $.fn.getMore = function() {
        //var settings = {
        //    data: {},
        //    url: '',
        //    callback: null,
        //    template: null,
        //    timestamp: ''
        //};
        //if (options) {
        //    $.extend(settings, options);
        //}
        //if (!settings.template) {
        //    settings.template = $('#js-topic-item-template').html();
        //}
        ////settings.template = template.compile(settings.template);
        //var self = this;
        //var timestamp = settings.timestamp;
        function ajax() {
            //settings.timestamp = timestamp;
            $.ajax({url:'http://localhost:63342', type: "get", success: function(data){},error: function(){}});

            //$.ajax({url: settings.url, data: {timestamp:settings.timestamp,uid:'73126',siteid:'1',tab:'hot',pagesize:'30',device_type:'Android',versions:'2.0.5'}, type: "post", beforeSend: function(request) {
            //    //request.setRequestHeader("Access-Control-Allow-Origin", "*");
            //    //request.setRequestHeader("APIVER", "2.0.5");
            //    //request.setRequestHeader("APPVER", "2.0.5");
            //    //request.setRequestHeader("HTTP_USER_AGENT", "android_");
            //},success: function(data) {
            //    try {
            //        console.log("success: data ="+data);
//                    data = $.parseJSON(data).Data;
//                    var html = '';
//                    if (data.TopicThreadList && data.TopicThreadList.length) {
//                        $.each(data.TopicThreadList, function(index, value) {
//                            html += settings.template({data: value}).replace(new RegExp('&#60;',"gm"),'<').replace(new RegExp('&#62;',"gm"),'>');
//                            if(index == data.TopicThreadList.length - 1){
//                                timestamp = value.addtime;
//                            }
//                        });
//                        settings.callback(html);
//                    } else {
//                        //var nodata = '';
//                        //if(lastid == 1 && $(self).attr('noDataTemp')!= null && $(self).attr('noDataTemp') != ''){
//                        //    nodata = $(self).attr('noDataTemp');
//                        //    var noDataTemp = $(nodata+'').html();
//                        //    $(self).parent().append(noDataTemp);
//                        //}
//                        //
//                        //if ($(self).find('a').attr('tourl') != null && $(self).find('a').attr('tourl') != '')
//                        //{
//                        //    window.location.href = $(self).find('a').attr('tourl');
//                        //}
//                        //$(self).remove();
//
//                    }
//                    //if (data.isend) {
//                    //    $(self).remove();
//                    //}
//
////                                                settings.lastid = lastid;
//
//
//                    ;
//                } catch (e) {
//                    //alert('链接服务器失败1，请稍后再试！ = ');
//                    console.log("e = "+ e.toString())
//                }
//            }, error: function(XHR,textStatus,errorThrown) {
//                console.log("XHR="+XHR+"\ntextStatus="+textStatus+"\nerrorThrown=" + errorThrown);
//            }});
        }
        ajax();
        //$(self).find('a').unbind('click').bind('click', function() {
        //    $(self).addClass('pxui-show-more-loading');
        //    ajax();
        //});
        return $(this);
    };
})