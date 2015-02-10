// global value
var JS_VOID = 'javascript:void(0);'
var _DOC = $(document);
var _Btn = $('<button>',{'class':'btn','type':'button'});
var _FirstModal;

    // --------------------------------------------- modal ----------------------------------------------------
    $('.modal:not(.noautofocus)').on('shown.bs.modal',function(e){
        FocusInput($(this).attr('id'));
    });
    (function($) {
        $.DoModal = function(args) {
            var ModalID = args.ModalID;
            var _ModalID = '#' + ModalID;
            var Remote = args.Remote;
            var SpecClass = args.SpecClass==undefined?'':args.SpecClass;
            var IsStatic = args.IsStatic == true?true:false;
            var Content = args.Content;
            var ShownCallBack = args.ShownCallBack;
            var ShownCallBackArgs = args.ShownCallBackArgs;
            var ShownCallBackOnce = args.ShownCallBackOnce;
            var ShownCallBackOnceArgs = args.ShownCallBackOnceArgs;
            var CurModal = $(_ModalID);
            if ( CurModal.length == 0 ) {
                CurModal = GetFirstModal().clone();
                CurModal.attr('id',ModalID);
                if (SpecClass)
                    CurModal.find('.modal-dialog').addClass(SpecClass);
                if (!IsStatic)
                    CurModal.append(ProgressBarHtml(true));
                else
                    CurModal.find('.modal-content').html(Content);
                CurModal.appendTo ('body');
                
                CurModal.on('shown.bs.modal',function(e){
                    if (ShownCallBackOnce != undefined
                        && CurModal.attr("state") != "inited") {
                        ShownCallBackOnce(ShownCallBackOnceArgs);
                        CurModal.attr("state","inited");
                    }
                    if (ShownCallBack != undefined)
                        ShownCallBack(ShownCallBackArgs);
                    if (!IsStatic)
                        DeleteFSBar();
                });
                if (!IsStatic) {
                    // load from remote
                    CurModal.modal({remote:Remote});
                    return;
                }
            }
            CurModal.modal({show:true});
        }
    })(jQuery);







    

// ------------------------------------------- First Modal -------------------------------------------------
function GetFirstModal(){
    if (_FirstModal)
        return _FirstModal;

    var Modal = $('<div>',{'class':'modal fade','id':'FirstModal','tabindex':'-1','role':'dialog','aria-hidden':'true'});
    var Dialog = $('<div>',{'class':'modal-dialog'});
    var Content = $('<div>',{'class':'modal-content'});
    var Header = $('<div>',{'class':'modal-header'});
    var Body = $('<div>',{'class':'modal-body'});
    var Footer = $('<div>',{'class':'modal-footer'});
    var Close = $('<button>',{'class':'close','data-dismiss':'modal','aria-hidden':'true'});
    Close.html('&times;');
    var H1 = $('<h1>');
    var Cancel = _Btn.clone().addClass('btn-default cancel').attr('data-dismiss','modal').text('取消');
    var OK = _Btn.clone().addClass('btn-default ok').attr('data-dismiss','modal').text('确认');
    Modal.append(
        Dialog.append(
            Content.
            append(Header.append(Close).append(H1)).
            append(Body).
            append(Footer.append(Cancel).append(OK))
            )).appendTo($('body'))
    _FirstModal = $('#FirstModal');
    return _FirstModal
}


function Sanitize(Html){
    var BlockTags = ['P','BLOCKQUOTE','TABLE','H1','H2','H3','H4','H5','H6','HR','OL','UL','PRE'];
    var Content = $('<div>');
    
    // 获取内容并插入临时容器
    Content.html(Html);

   // 删除空的字符串节点
   CleanEmptyTextNode(Content.get(0));

   // 将非块节点用 p 包裹起来
   var AllChildren = Content.contents();
   var TempP = $('<p>');
   var TempDiv = $('<div>');
    // 遍历一层子节点（包括文本节点）
    for (i = 0; i < AllChildren.length; i++) {
        var Node = $(AllChildren[i]);
        // 是文本，填充至 p 块
        if (Node.get(0).nodeType === 3) {
            Node.appendTo(TempP);
            continue;
        }
        var tagName = Node.prop("tagName");
        if ($.inArray(tagName,BlockTags) == -1) {
            // 非块节点，填充至 p 块
            Node.appendTo(TempP);
        }
        else {
            // 是块节点，则先提交缓存包裹块
            if (TempP.contents().length != 0) {
                TempP.appendTo(TempDiv);
                TempP = $('<p>');
            }
            // 再提交当前块节点
            Node.appendTo(TempDiv);
        }
    }
    // 如果最后的包裹块非空，非提交
    if (TempP.contents().length != 0) {
        TempP.appendTo(TempDiv);
    }
    
    // 清空无效节点
    Content.find('*').filter(function(){
        if ($(this).prop("tagName") == 'BR')
            return false;
        var text = $(this).text();
        for (var i = 0;i < text.length;i++)
            if (text[i] != wysihtml5.INVISIBLE_SPACE)
                return false;
        }).remove();
    
    return TempDiv.html();
}

function CleanEmptyTextNode(Node) {
    var WhiteSpaceMatcher = /^\s+$/;
    var NonBreakSpaceMatcher = /\u00A0+/;
    var DeleteNodes = [];
    function RecursiveClean(node) {
        var v = node.nodeValue;
        if (node.nodeType == 3 && WhiteSpaceMatcher.test(v)
            && !NonBreakSpaceMatcher.test(v)) {
            DeleteNodes.push(node);
    }
    else {
        for (var i = 0,len = node.childNodes.length; i < len; ++i) {
            RecursiveClean(node.childNodes[i]);
        }
    }
}
RecursiveClean(Node);
for (var i = 0,len = DeleteNodes.length; i < len; ++i) {
    var n = DeleteNodes[i];
    n.parentNode.removeChild(n);
}
}