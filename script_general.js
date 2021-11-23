(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init()","shadow":false,"height":"100%","verticalAlign":"top","overflow":"hidden","definitions": [{"id":"media_6E70E63B_4938_B19D_41CB_9B071D95B76E_camera","manualRotationSpeed":1800,"manualZoomSpeed":1,"initialPosition":{"class":"RotationalCameraPosition","yaw":0,"pitch":0,"hfov":90},"automaticRotationSpeed":10,"class":"RotationalCamera","hoverFactor":0,"automaticZoomSpeed":10},{"verticalAlign":"middle","data":{"name":"Button31994"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":40,"id":"IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"toggle","height":40,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31991"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png","height":32,"horizontalAlign":"center"},{"buttonMoveRight":"this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40","zoomEnabled":true,"buttonPause":"this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2","buttonMoveLeft":"this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C","buttonZoomOut":"this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"buttonMoveUp":"this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F","gyroscopeVerticalDraggingEnabled":true,"buttonRestart":"this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","buttonPlayLeft":"this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B","buttonMoveDown":"this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44","buttonPlayRight":"this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF","buttonZoomIn":"this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA","displayPlaybackBar":true},{"verticalAlign":"middle","data":{"name":"Button31987"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png","height":32,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31986"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":40,"id":"IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png","height":40,"horizontalAlign":"center"},{"loop":false,"overlays":["this.overlay_6DB64EA5_4939_EEB5_41CE_6EA042081322"],"vfov":180,"hfov":360,"id":"media_6E70E63B_4938_B19D_41CB_9B071D95B76E","pitch":0,"adjacentPanoramas":[{"distance":25.99,"yaw":-104.98,"select":"this.overlay_6DB64EA5_4939_EEB5_41CE_6EA042081322.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6DB64EA5_4939_EEB5_41CE_6EA042081322"},"class":"AdjacentPanorama","panorama":"this.media_6EF80715_4938_9F95_41CD_9F2A3723A2FA","backwardYaw":170.2}],"partial":false,"thumbnailUrl":"media/media_6E70E63B_4938_B19D_41CB_9B071D95B76E_t.jpg","hfovMin":60,"label":trans('media_6E70E63B_4938_B19D_41CB_9B071D95B76E.label'),"class":"Video360","hfovMax":140,"video":[{"width":3840,"framerate":24,"type":"video/mp4","height":1920,"posterURL":"media/media_6E70E63B_4938_B19D_41CB_9B071D95B76E_poster.jpg","class":"Video360Resource","bitrate":13271,"url":"media/media_6E70E63B_4938_B19D_41CB_9B071D95B76E.mp4"},{"width":4096,"framerate":24,"type":"video/mp4","height":2048,"posterURL":"media/media_6E70E63B_4938_B19D_41CB_9B071D95B76E_poster.jpg","class":"Video360Resource","bitrate":15099,"url":"media/media_6E70E63B_4938_B19D_41CB_9B071D95B76E_1.mp4"}],"data":{"label":"Dining Hall 1"}},{"verticalAlign":"middle","data":{"name":"Button31995"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png","height":32,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31990"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":40,"id":"IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"toggle","height":40,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31992"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png","height":32,"horizontalAlign":"center"},{"shadow":false,"data":{"name":"Container31983"},"verticalAlign":"middle","height":"96.479%","contentOpaque":false,"paddingLeft":0,"class":"Container","paddingRight":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","width":360,"children":["this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552","this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76","this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B","this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C","this.Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD","this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40","this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF","this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5","this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"],"id":"Container_5645B517_5EBA_61DA_41CE_5170204AEC9E","paddingTop":0,"gap":4,"borderSize":0,"paddingBottom":0,"minHeight":20,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarWidth":10,"minWidth":360,"scrollBarColor":"#000000","overflow":"hidden","horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31989"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png","height":32,"horizontalAlign":"center"},{"shadow":false,"data":{"name":"Container44746"},"verticalAlign":"middle","overflow":"scroll","contentOpaque":false,"paddingLeft":0,"class":"Container","paddingRight":0,"layout":"horizontal","propagateClick":false,"scrollBarMargin":2,"backgroundOpacity":0,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","width":"100%","children":["this.Container_5645B517_5EBA_61DA_41CE_5170204AEC9E"],"id":"Container_6DAA3B41_4938_97ED_41C2_54D0E68F30EC","paddingTop":0,"gap":10,"borderSize":0,"paddingBottom":0,"minHeight":1,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarWidth":10,"minWidth":1,"left":"0%","bottom":"0%","height":142,"scrollBarColor":"#000000","horizontalAlign":"center"},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.media_6EF80715_4938_9F95_41CD_9F2A3723A2FA","player":"this.MainViewerPanoramaPlayer","camera":"this.media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_camera","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)"},{"media":"this.media_6E70E63B_4938_B19D_41CB_9B071D95B76E","player":"this.MainViewerPanoramaPlayer","camera":"this.media_6E70E63B_4938_B19D_41CB_9B071D95B76E_camera","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 0)","end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)"}]},{"shadow":false,"data":{"name":"Container31988"},"verticalAlign":"middle","height":"100%","contentOpaque":false,"paddingLeft":0,"class":"Container","paddingRight":0,"backgroundOpacity":0,"layout":"vertical","propagateClick":false,"scrollBarMargin":2,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","width":40,"children":["this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F","this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2","this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"],"id":"Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD","paddingTop":0,"gap":4,"borderSize":0,"paddingBottom":0,"minHeight":20,"scrollBarOpacity":0.5,"borderRadius":0,"scrollBarWidth":10,"minWidth":20,"scrollBarColor":"#000000","overflow":"hidden","horizontalAlign":"center"},{"loop":false,"overlays":["this.overlay_6D9F0744_4938_FFEB_41C5_7633CC638B76"],"vfov":180,"hfov":360,"id":"media_6EF80715_4938_9F95_41CD_9F2A3723A2FA","pitch":0,"adjacentPanoramas":[{"distance":70.67,"yaw":170.2,"select":"this.overlay_6D9F0744_4938_FFEB_41C5_7633CC638B76.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_6D9F0744_4938_FFEB_41C5_7633CC638B76"},"class":"AdjacentPanorama","panorama":"this.media_6E70E63B_4938_B19D_41CB_9B071D95B76E","backwardYaw":-104.98}],"partial":false,"thumbnailUrl":"media/media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_t.jpg","hfovMin":60,"label":trans('media_6EF80715_4938_9F95_41CD_9F2A3723A2FA.label'),"class":"Video360","hfovMax":140,"video":[{"width":3840,"framerate":24,"type":"video/mp4","height":1920,"posterURL":"media/media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_poster.jpg","class":"Video360Resource","bitrate":13271,"url":"media/media_6EF80715_4938_9F95_41CD_9F2A3723A2FA.mp4"},{"width":4096,"framerate":24,"type":"video/mp4","height":2048,"posterURL":"media/media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_poster.jpg","class":"Video360Resource","bitrate":15099,"url":"media/media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_1.mp4"}],"data":{"label":"Courtyard 1"}},{"verticalAlign":"middle","data":{"name":"Button31985"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":40,"id":"IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png","height":40,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31993"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":40,"id":"IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png","height":40,"horizontalAlign":"center"},{"verticalAlign":"middle","data":{"name":"Button31984"},"shadow":false,"cursor":"hand","transparencyActive":true,"paddingLeft":0,"class":"IconButton","pressedIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png","paddingRight":0,"backgroundOpacity":0,"propagateClick":false,"toolTipHorizontalAlign":"center","width":32,"id":"IconButton_5645B517_5EBA_61DA_41D3_52532616D552","paddingTop":0,"iconURL":"skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png","borderSize":0,"paddingBottom":0,"minHeight":0,"borderRadius":0,"minWidth":0,"mode":"push","rollOverIconURL":"skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png","height":32,"horizontalAlign":"center"},{"id":"media_6EF80715_4938_9F95_41CD_9F2A3723A2FA_camera","manualRotationSpeed":1800,"manualZoomSpeed":1,"initialPosition":{"class":"RotationalCameraPosition","yaw":165.66,"pitch":-5.12,"hfov":90},"automaticRotationSpeed":10,"class":"RotationalCamera","hoverFactor":0,"automaticZoomSpeed":10},{"subtitlesPaddingTop":5,"displayTooltipInSurfaceSelection":true,"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","subtitlesBorderSize":0,"toolTipPaddingLeft":6,"toolTipPaddingBottom":4,"subtitlesTextDecoration":"none","toolTipBorderColor":"#767676","progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesFontWeight":"normal","toolTipBorderSize":1,"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"progressBorderColor":"#AAAAAA","toolTipShadowSpread":0,"translationTransitionDuration":1000,"subtitlesFontFamily":"Arial","progressBarBackgroundColor":["#222222","#444444"],"subtitlesEnabled":true,"class":"ViewerArea","subtitlesFontColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarOpacity":1,"progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadShadowVerticalLength":0,"toolTipShadowBlurRadius":3,"toolTipPaddingRight":6,"playbackBarHeadShadowBlurRadius":3,"progressBottom":1,"progressBarOpacity":1,"transitionDuration":500,"toolTipHorizontalAlign":"center","playbackBarHeadBorderRadius":0,"playbackBarHeight":20,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderSize":2,"playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesTextShadowVerticalLength":1,"progressHeight":20,"progressBarBorderRadius":4,"surfaceReticleColor":"#FFFFFF","subtitlesOpacity":1,"playbackBarProgressOpacity":1,"progressBarBorderSize":0,"surfaceReticleOpacity":0.6,"playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleSelectionOpacity":1,"borderRadius":0,"height":"100%","paddingTop":0,"playbackBarBottom":10,"playbackBarHeadHeight":30,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadWidth":6,"subtitlesGap":0,"paddingBottom":0,"subtitlesTextShadowBlurRadius":0,"toolTipShadowOpacity":1,"top":0,"firstTransitionDuration":0,"progressBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowColor":"#333333","shadow":false,"subtitlesPaddingLeft":5,"playbackBarHeadShadowColor":"#000000","subtitlesHorizontalAlign":"center","progressLeft":10,"subtitlesBackgroundColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorRatios":[0,1],"playbackBarBorderSize":2,"subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"toolTipFontStyle":"normal","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesPaddingBottom":5,"subtitlesFontSize":"3vmin","playbackBarProgressBorderSize":0,"vrPointerColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"paddingLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipShadowVerticalLength":0,"subtitlesShadow":false,"toolTipFontSize":12,"paddingRight":0,"vrPointerSelectionTime":2000,"playbackBarHeadShadow":true,"progressBackgroundOpacity":1,"toolTipDisplayTime":600,"subtitlesVerticalAlign":"bottom","propagateClick":false,"displayTooltipInTouchScreens":true,"toolTipFontFamily":"Arial","toolTipTextShadowOpacity":0,"width":"100%","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadOpacity":1,"toolTipFontWeight":"normal","id":"MainViewer","playbackBarBackgroundColorDirection":"vertical","transitionMode":"blending","toolTipFontColor":"#606060","borderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesTop":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarBorderColor":"#AAAAAA","minWidth":100,"minHeight":50,"playbackBarBackgroundOpacity":1,"playbackBarRight":0,"left":0,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"progressOpacity":1,"progressBackgroundColorRatios":[0,1],"progressRight":10,"playbackBarBorderRadius":4},{"id":"overlay_6DB64EA5_4939_EEB5_41CE_6EA042081322","data":{"hasPanoramaAction":true,"label":"GoToCourtyard1"},"areas":["this.HotspotPanoramaOverlayArea_6ED28F23_4939_EFAD_41D0_C15662D6514C"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"verticalAlign":"middle","yaw":-104.98,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","distance":50,"vfov":12,"playbackPositions":[{"yaw":-104.98,"vfov":12,"rotationX":0,"hfov":12,"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"opacity":1,"pitch":-3.73,"rotationY":0}],"data":{"label":"GoToCourtyard1"},"hfov":12,"image":"this.res_6E8B65C0_4928_92EB_41AB_F64C044FA8B4","pitch":-3.73,"horizontalAlign":"center"}],"maps":[],"useHandCursor":true},{"id":"overlay_6D9F0744_4938_FFEB_41C5_7633CC638B76","data":{"hasPanoramaAction":true,"label":"GoToDiningHall1"},"areas":["this.HotspotPanoramaOverlayArea_6EDC97EE_4938_FEB7_4178_027FACB8A65A"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"verticalAlign":"middle","yaw":170.2,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","distance":50,"vfov":9,"playbackPositions":[{"yaw":170.2,"vfov":9,"rotationX":0,"hfov":9,"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"opacity":1,"pitch":-1.37,"rotationY":0}],"data":{"label":"GoToDiningHall1"},"hfov":9,"image":"this.res_6E8B65C0_4928_92EB_41AB_F64C044FA8B4","pitch":-1.37,"horizontalAlign":"center"}],"maps":[],"useHandCursor":true},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6ED28F23_4939_EFAD_41D0_C15662D6514C","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0); this.MainViewerPanoramaPlayer.play()"},{"class":"ImageResource","id":"res_6E8B65C0_4928_92EB_41AB_F64C044FA8B4","levels":[{"url":"media/res_6E8B65C0_4928_92EB_41AB_F64C044FA8B4_0.png","class":"ImageResourceLevel","height":151,"width":151}]},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6EDC97EE_4938_FEB7_4178_027FACB8A65A","mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1); this.MainViewerPanoramaPlayer.play()"}],"defaultVRPointer":"laser","data":{"locales":{"en":"locale/en.txt"},"name":"Player43899","defaultLocale":"en","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"pitch":1,"rate":1}},"backgroundColorDirection":"vertical","mouseWheelEnabled":true,"backgroundColorRatios":[0],"paddingLeft":0,"class":"Player","contentOpaque":false,"paddingRight":0,"buttonToggleMute":"this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5","scripts":{"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoForward":TDV.Tour.Script.historyGoForward,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"openLink":TDV.Tour.Script.openLink,"shareSocial":TDV.Tour.Script.shareSocial,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"init":TDV.Tour.Script.init,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setValue":TDV.Tour.Script.setValue,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initQuiz":TDV.Tour.Script.initQuiz,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMainViewer":TDV.Tour.Script.getMainViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"existsKey":TDV.Tour.Script.existsKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"initAnalytics":TDV.Tour.Script.initAnalytics,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"downloadFile":TDV.Tour.Script.downloadFile,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"setLocale":TDV.Tour.Script.setLocale,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"registerKey":TDV.Tour.Script.registerKey,"getPixels":TDV.Tour.Script.getPixels,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizStart":TDV.Tour.Script.quizStart,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone},"propagateClick":false,"scrollBarMargin":2,"backgroundOpacity":1,"toolTipHorizontalAlign":"center","backgroundColor":["#FFFFFF"],"width":"100%","downloadEnabled":false,"backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","id":"rootPlayer","paddingTop":0,"vrPolyfillScale":0.75,"children":["this.MainViewer","this.Container_6DAA3B41_4938_97ED_41C2_54D0E68F30EC"],"mobileMipmappingEnabled":false,"gap":10,"borderSize":0,"paddingBottom":0,"minHeight":20,"scrollBarOpacity":0.5,"borderRadius":0,"layout":"absolute","scrollBarWidth":10,"minWidth":20,"desktopMipmappingEnabled":false,"mediaActivationMode":"window","scrollBarColor":"#000000","horizontalAlign":"left"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.16.js.map
//Generated with v2021.2.16, Mon Nov 22 2021