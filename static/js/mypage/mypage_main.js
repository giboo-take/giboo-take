// 게시물, 댓글 삭제 버튼 클릭 시 모달창 띄우기
$('.btn-delete').each((i, value)=>{
    $(value).on("click", (e) => {
        $('#modalOFF').attr('id','modalON')
        $('.dimmed_layer').css('height','100%');
        $('.dialog-content').css('display','block');
        $('.modal-delete').css('display','block');
        $('.modal-badge').css('display','none');
        $targetName = e.target.parentElement.className;
        if($targetName == "info-append"){
            console.log($targetName)
            $('.txt-desc').html('댓글 삭제시 복구가 불가능합니다.<br>정말 삭제하시겠습니까?')
        }else{
            console.log($targetName)
            $('.txt-desc').html('행동 삭제시 복구가 불가능합니다.<br>정말 삭제하시겠습니까?')
        }
        }
        )
    }
)
//  취소 버튼 클릭 시 모달창 사라짐
$('.btn-type2').on("click", () =>{
        $('#modalON').attr('id','modalOFF');
        $('.dimmed_layer').css('height','0');
        $('.dialog-content').css('display','none');
        })

// 뱃지 클릭시 모달 창 띄우기
$('.link-badge').each((i, value)=>{
    $(value).on("click", () => {
        $('#modalOFF').attr('id','modalON')
        $('.dimmed_layer').css('height','100%');
        $('.dialog-content').css('display','block');
        $('.modal-badge').css('display','block');
        $('.modal-delete').css('display','none');
        }
        )
    }
)
// X버튼 클릭 시 모달창 닫기
$('.btn-close').on("click", () =>{
        $('#modalON').attr('id','modalOFF');
        $('.dimmed_layer').css('height','0');
        $('.dialog-content').css('display','none');
        })