(function($) {
    var options = {
        rotateNum: 5,
        dom: '#box1',
        startCbs: function() {},
        disabledCbs: function() {},
        endCbs: function() {}
    };
    window.Lottery = Lottery;

    function Lottery(opts) {
        this.opts = $.extend(true, {}, options, opts);
        this.flag = false;
        this.init();
    }
    Lottery.prototype.init = function() {
        var _this = this;
        this.angle = this.opts.rotateNum * 360;
        $(this.opts.dom).on('click', '.btn1', function() {
            if (!_this.flag) {
                _this.goLottery(_this.opts.startCbs.call(_this));
            } else {
                _this.opts.disabledCbs();
            }
        });
        $(this.opts.dom).find('.table1').get(0).addEventListener('webkitTransitionEnd', function() {
            _this.flag = false;
            var ang = $(this).attr('data-deg');
            $(this).css({
                'transition': 'none',
                'transform': 'rotate(' + ang + 'deg)'
            });
            console.log(_this)
            _this.opts.endCbs(ang);
        });
    }

    Lottery.prototype.goLottery = function(_deg) {
        if (this.flag) return;
        var deg = _deg + this.angle;
        this.flag = true;
        $(this.opts.dom).find('.table1').css({
            'transition': 'transform 5s ease',
            'transform': 'rotate(' + deg + 'deg)'
        }).attr('data-deg', _deg);
    }
})($);