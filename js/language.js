var index = {
    initPage: function() {
        var self = this;
        self.initBtn(self);
    },
    initBtn: function(self) {
        var english = ["Hello", "June"];
        var chinese = [];
        $(".content").children(".yes").each(function(i, item) {
            var pag_val = $.trim($(item).text());
            chinese.push(pag_val);
        });
        $("button").click(function() {
            if ($.trim($(this).text()) == "中文") {
                $(this).text("english")
                $(".content").children(".yes").each(function(i, item) {
                    $(item).text(chinese[i]);
                });
            } else {
                $(this).text("中文");
                $(".content").children(".yes").each(function(i, item) {
                    $(item).text(english[i]);
                });
            }
        })
    }
};
$(function() {
    index.initPage();
})