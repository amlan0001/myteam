
var handleSidebarMenu = function() {
        "use strict";
        $(".sidebar .nav > .has-sub > a").click(function() {
            var e = $(this).next(".sub-menu"),
                t = ".sidebar .nav > li.has-sub > .sub-menu";
            0 === $(".page-sidebar-minified").length && ($(t).not(e).slideUp(250, function() {
                $(this).closest("li").removeClass("expand")
            }), $(e).slideToggle(250, function() {
                var e = $(this).closest("li");
                $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand")
            }))
        }), $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function() {
            if (0 === $(".page-sidebar-minified").length) {
                var e = $(this).next(".sub-menu");
                $(e).slideToggle(250)
            }
        })
    },
    handleMobileSidebarToggle = function() {
        "use strict";
        var e = !1;
        $(".sidebar").bind("click touchstart", function(t) {
            0 !== $(t.target).closest(".sidebar").length ? e = !0 : (e = !1, t.stopPropagation())
        }), $(document).bind("click touchstart", function(t) {
            0 === $(t.target).closest(".sidebar").length && (e = !1), t.isPropagationStopped() || e === !0 || ($("#page-container").hasClass("page-sidebar-toggled") && (e = !0, $("#page-container").removeClass("page-sidebar-toggled")), $(window).width() <= 767 && $("#page-container").hasClass("page-right-sidebar-toggled") && (e = !0, $("#page-container").removeClass("page-right-sidebar-toggled")))
        }), $("[data-click=right-sidebar-toggled]").click(function(t) {
            t.stopPropagation();
            var a = "#page-container",
                i = "page-right-sidebar-toggled";
            $(a).hasClass(i) ? $(a).removeClass(i) : e !== !0 ? $(a).addClass(i) : e = !1
        }), $("[data-click=sidebar-toggled]").click(function(t) {
            t.stopPropagation();
            var a = "page-sidebar-toggled",
                i = "#page-container";
            $(i).hasClass(a) ? $(i).removeClass(a) : e !== !0 ? $(i).addClass(a) : e = !1, $(window).width() < 480 && $("#page-container").removeClass("page-right-sidebar-toggled")
        })
    },
    handleSidebarMinify = function() {
        "use strict";
        $("[data-click=sidebar-minify]").click(function(e) {
            e.preventDefault();
            var t = "page-sidebar-minified",
                a = "#page-container";
            $('#sidebar [data-scrollbar="true"]').css("margin-top", "0"), $('#sidebar [data-scrollbar="true"]').removeAttr("data-init"), $("#sidebar [data-scrollbar=true]").stop(), $(a).hasClass(t) ? ($(a).removeClass(t), $(a).hasClass("page-sidebar-fixed") ? (0 !== $("#sidebar .slimScrollDiv").length && ($('#sidebar [data-scrollbar="true"]').slimScroll({
                destroy: !0
            }), $('#sidebar [data-scrollbar="true"]').removeAttr("style")), generateSlimScroll($('#sidebar [data-scrollbar="true"]')), $("#sidebar [data-scrollbar=true]").trigger("mouseover")) : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (0 !== $("#sidebar .slimScrollDiv").length && ($('#sidebar [data-scrollbar="true"]').slimScroll({
                destroy: !0
            }), $('#sidebar [data-scrollbar="true"]').removeAttr("style")), generateSlimScroll($('#sidebar [data-scrollbar="true"]')))) : ($(a).addClass(t), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $('#sidebar [data-scrollbar="true"]').css("overflow", "visible") : ($(a).hasClass("page-sidebar-fixed") && ($('#sidebar [data-scrollbar="true"]').slimScroll({
                destroy: !0
            }), $('#sidebar [data-scrollbar="true"]').removeAttr("style")), $("#sidebar [data-scrollbar=true]").trigger("mouseover"))), $(window).trigger("resize")
        })
    },
    handleMobileSidebar = function() {
        "use strict";
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $("#page-container").hasClass("page-sidebar-minified") && ($('#sidebar [data-scrollbar="true"]').css("overflow", "visible"), $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').slimScroll({
            destroy: !0
        }), $('.page-sidebar-minified #sidebar [data-scrollbar="true"]').removeAttr("style"), $(".page-sidebar-minified #sidebar [data-scrollbar=true]").trigger("mouseover"));
        var e = 0;
        $(".page-sidebar-minified .sidebar [data-scrollbar=true] a").bind("touchstart", function(t) {
            var a = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                i = a.pageY;
            e = i - parseInt($(this).closest("[data-scrollbar=true]").css("margin-top"))
        }), $(".page-sidebar-minified .sidebar [data-scrollbar=true] a").bind("touchmove", function(t) {
            if (t.preventDefault(), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                var a = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                    i = a.pageY,
                    n = i - e;
                $(this).closest("[data-scrollbar=true]").css("margin-top", n + "px")
            }
        }), $(".page-sidebar-minified .sidebar [data-scrollbar=true] a").bind("touchend", function() {
            var t = $(this).closest("[data-scrollbar=true]"),
                a = $(window).height(),
                i = parseInt($("#sidebar").css("top")),
                n = $("#sidebar").height();
            e = $(t).css("margin-top");
            var o = i;
            $(".sidebar").not(".sidebar-right").find(".nav").each(function() {
                o += $(this).height()
            });
            var s = -parseInt(e) + $(".sidebar").height();
            if (s >= o && o >= a && o >= n) {
                var r = a - o - 20;
                $(t).animate({
                    marginTop: r + "px"
                })
            } else parseInt(e) >= 0 || n >= o ? $(t).animate({
                marginTop: "0px"
            }) : (r = e, $(t).animate({
                marginTop: r + "px"
            }));
            return !0
        })
    },
    handleClearSidebarSelection = function() {
        $(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")
    },
    handleClearSidebarMobileSelection = function() {
        $("#page-container").removeClass("page-sidebar-toggled")
    },
    handleUnlimitedTopMenuRender = function() {
        "use strict";

        function e(e, t) {
            var a = $(e).closest(".nav"),
                i = parseInt($(a).css("margin-left")),
                n = $(".top-menu").width() - 88,
                o = 0,
                s = 0;
            switch ($(a).find("li").each(function() {
                $(this).hasClass("menu-control") || (o += $(this).width())
            }), t) {
                case "next":
                    var r = o + i - n;
                    n >= r ? (s = r - i + 128, setTimeout(function() {
                        $(a).find(".menu-control.menu-control-right").removeClass("show")
                    }, 150)) : s = n - i - 128, 0 != s && $(a).animate({
                        marginLeft: "-" + s + "px"
                    }, 150, function() {
                        $(a).find(".menu-control.menu-control-left").addClass("show")
                    });
                    break;
                case "prev":
                    var r = -i;
                    n >= r ? ($(a).find(".menu-control.menu-control-left").removeClass("show"), s = 0) : s = r - n + 88, $(a).animate({
                        marginLeft: "-" + s + "px"
                    }, 150, function() {
                        $(a).find(".menu-control.menu-control-right").addClass("show")
                    })
            }
        }

        function t() {
            var e = $(".top-menu .nav"),
                t = $(".top-menu .nav > li"),
                a = $(".top-menu .nav > li.active"),
                i = $(".top-menu"),
                n = (parseInt($(e).css("margin-left")), $(i).width() - 128),
                o = $(".top-menu .nav > li.active").width(),
                s = 0,
                r = 0;
            if ($(a).prevAll().each(function() {
                    o += $(this).width()
                }), $(t).each(function() {
                    $(this).hasClass("menu-control") || (r += $(this).width())
                }), o >= n) {
                var l = o - n + 128;
                $(e).animate({
                    marginLeft: "-" + l + "px"
                }, s)
            }
            o != r && r >= n ? $(e).find(".menu-control.menu-control-right").addClass("show") : $(e).find(".menu-control.menu-control-right").removeClass("show"), o >= n && r >= n ? $(e).find(".menu-control.menu-control-left").addClass("show") : $(e).find(".menu-control.menu-control-left").removeClass("show")
        }
        $('[data-click="next-menu"]').click(function(t) {
            t.preventDefault(), e(this, "next")
        }), $('[data-click="prev-menu"]').click(function(t) {
            t.preventDefault(), e(this, "prev")
        }), $(window).resize(function() {
            $(".top-menu .nav").removeAttr("style"), t()
        }), t()
    },
    handleTopMenuSubMenu = function() {
        "use strict";
        $(".top-menu .sub-menu .has-sub > a").click(function() {
            var e = $(this).closest("li").find(".sub-menu").first(),
                t = $(this).closest("ul").find(".sub-menu").not(e);
            $(t).not(e).slideUp(250, function() {
                $(this).closest("li").removeClass("expand")
            }), $(e).slideToggle(250, function() {
                var e = $(this).closest("li");
                $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand")
            })
        })
    },
    handleMobileTopMenuSubMenu = function() {
        "use strict";
        $(".top-menu .nav > li.has-sub > a").click(function() {
            if ($(window).width() <= 767) {
                var e = $(this).closest("li").find(".sub-menu").first(),
                    t = $(this).closest("ul").find(".sub-menu").not(e);
                $(t).not(e).slideUp(250, function() {
                    $(this).closest("li").removeClass("expand")
                }), $(e).slideToggle(250, function() {
                    var e = $(this).closest("li");
                    $(e).hasClass("expand") ? $(e).removeClass("expand") : $(e).addClass("expand")
                })
            }
        })
    },
    handleTopMenuMobileToggle = function() {
        "use strict";
        $('[data-click="top-menu-toggled"]').click(function() {
            $(".top-menu").slideToggle(250)
        })
    },
    handleSlimScroll = function() {
        "use strict";
        $('[data-scrollbar="true"]').each(function() {
            generateSlimScroll($(this))
        })
    },
    generateSlimScroll = function(e) {
        "use strict";
        if (!$(e).attr("data-init")) {
            var t = $(e).attr("data-height");
            t = t ? t : $(e).height();
            var a = $(e).attr("data-distance");
            a = a ? a : "0px";
            var i = $(e).attr("data-position");
            i = i ? i : "right";
            var n = {
                height: t,
                alwaysVisible: !0,
                distance: a,
                position: i
            };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? ($(e).css("height", t), $(e).css("overflow-x", "scroll")) : $(e).slimScroll(n), $(e).attr("data-init", !0)
        }
    },
    handleTooltipInit = function() {
        "use strict";
        0 !== $('[data-toggle="tooltip"]').length && $('[data-toggle="tooltip"]').tooltip()
    },
    handlePopoverInit = function() {
        0 !== $('[data-toggle="popover"]').length && $('[data-toggle="popover"]').popover()
    },
    handlePageLoad = function() {
        "use strict";
        $("#page-loader").addClass("hide"), $("#page-container").addClass("in")
    },
    handleScrollToTopButton = function() {
        "use strict";
        $("[data-click=scroll-top]").click(function(e) {
            e.preventDefault(), $("html, body").animate({
                scrollTop: $("body").offset().top
            }, 500)
        })
    },
    panelActionRunning = !1,
    handlePanelAction = function() {
        "use strict";
        return panelActionRunning ? !1 : (panelActionRunning = !0, $("[data-click=panel-remove]").hover(function() {
            $(this).tooltip({
                title: "Remove",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show")
        }), $(document).on("click", "[data-click=panel-remove]", function(e) {
            e.preventDefault(), $(this).tooltip("destroy"), $(this).closest(".panel").remove()
        }), $(document).on("hover", "[data-click=panel-collapse]", function() {
            $(this).tooltip({
                title: "Collapse / Expand",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show")
        }), $(document).on("click", "[data-click=panel-collapse]", function(e) {
            e.preventDefault(), $(this).closest(".panel").find(".panel-body").slideToggle()
        }), $(document).on("hover", "[data-click=panel-reload]", function() {
            $(this).tooltip({
                title: "Reload",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show")
        }), $(document).on("click", "[data-click=panel-reload]", function(e) {
            e.preventDefault();
            var t = $(this).closest(".panel");
            if (!$(t).hasClass("panel-loading")) {
                var a = $(t).find(".panel-body"),
                    i = '<div class="panel-loader"><span class="spinner-small">Loading...</span></div>';
                $(t).addClass("panel-loading"), $(a).prepend(i), setTimeout(function() {
                    $(t).removeClass("panel-loading"), $(t).find(".panel-loader").remove()
                }, 2e3)
            }
        }), $(document).on("hover", "[data-click=panel-expand]", function() {
            $(this).tooltip({
                title: "Expand / Compress",
                placement: "bottom",
                trigger: "hover",
                container: "body"
            }), $(this).tooltip("show")
        }), void $(document).on("click", "[data-click=panel-expand]", function(e) {
            e.preventDefault();
            var t = $(this).closest(".panel"),
                a = "panel-expand",
                i = $(t).find(".panel-body"),
                n = $(this).attr($(t).hasClass(a) ? "data-collapse-callback" : "data-expand-callback");
            if (n && window[n]($(this)), $(t).hasClass(a)) $(i).removeAttr("style"), $(i).find('[data-scrollbar="true"]').each(function() {
                var e = $(this).attr("data-ori-height");
                $(this).slimScroll({
                    destroy: !0
                }), $(this).removeAttr("style"), $(this).attr("data-height", e), generateSlimScroll(this)
            }), $(t).removeClass(a);
            else {
                var o = $(window).height() - $(t).find(".panel-heading").height() - 30;
                $(i).find('[data-scrollbar="true"]').each(function() {
                    var e = $(this).attr("data-height");
                    $(this).slimScroll({
                        destroy: !0
                    }), $(this).removeAttr("style"), $(this).attr("data-ori-height", e), $(this).attr("data-height", "100%"), generateSlimScroll(this)
                }), $(i).css("height", o), $(t).addClass(a)
            }
            $(window).trigger("resize")
        }))
    },
    App = function() {
        "use strict";
        return {
            initSidebar: function() {
                handleSidebarMenu(), handleMobileSidebarToggle(), handleSidebarMinify(), handleMobileSidebar()
            },
            initSidebarSelection: function() {
                handleClearSidebarSelection()
            },
            initSidebarMobileSelection: function() {
                handleClearSidebarMobileSelection()
            },
            initTopMenu: function() {
                handleUnlimitedTopMenuRender(), handleTopMenuSubMenu(), handleMobileTopMenuSubMenu(), handleTopMenuMobileToggle()
            },
            initComponent: function() {
                handleTooltipInit(), handlePopoverInit(), handlePanelAction(), handleSlimScroll(), handleScrollToTopButton()
            },
            initPageLoad: function() {
                handlePageLoad()
            },
            init: function() {
                this.initTopMenu(), this.initSidebar(), this.initComponent(), this.initPageLoad()
            },
            scrollTop: function() {
                $("html, body").animate({
                    scrollTop: $("body").offset().top
                }, 0)
            }
        }
    }();