

// 에러 보이게 하는 클래스 추가
function visibleMakerCheck(e, type) {
    // 에러라면 에러 보이게
    if( type )
        e.target.nextElementSibling.classList.add("visible-maker");
    // 에러가 아니라면 삭제
    else
        e.target.nextElementSibling.classList.remove("visible-maker");
}

// 유효하지 않을 때 에러를 표시
function highlightError(e, check) {
    // 에러가 맞다면
    if( check )
        e.target.style.border = "1px solid red";
    // 에러가 아니라면
    else 
        e.target.style.border = "none";
}

// 공백 제거
function isEmpty(value) {
    return value.trim() === '';
}

// 공백 검사
function isEmptyCheck(e) {
    
    // 빈칸 검색
    if( isEmpty(e.target.value) ) {
        console.log("빈칸입니다");
        highlightError(e, true);
        visibleMakerCheck(e, true);
        
        return true;
    }
    // 빈칸 아니라면 다음 작업 진행
    else 
        return false;
}

// 이메일 철자 검사
function emailSpellCheck(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 비밀번호 길이 유효성 검사
function validatePasswordLength(password) {
    // 비밀번호 길이가 8자 넘는지 체크
    return password.length >= 8;
}

//각 항목 별로 이벤트 할당하기
export function validateInput(e, inputType) {
    switch(inputType) {
        case 'email':
            console.log('이메일');
            validateEmail(e);
            break;
        case 'nickname':
            console.log('닉네임');
            validateNickname(e);
            break;
        case 'password':
            console.log('비밀번호');
            validatePassword(e);
            break;
        case 'passwordConf':
            console.log('비밀번호 확인');
            validatePassword(e);
            break;
        default:
            console.log('잘못된 입력 유형입니다.');
    }
}

// 이메일 유효성 검사
function validateEmail(e) {

    // 공백이 없다면
    if ( !isEmptyCheck(e) ) {
        // 이메일 형식이 맞다면
        if ( emailSpellCheck(e.target.value) ) {
            highlightError(e, false);
            visibleMakerCheck(e, false);
        }
        // 이메일 형식이 틀리다면 재확인요청
        else {
            highlightError(e, true);
            visibleMakerCheck(e, true);
            e.target.nextElementSibling.textContent = "잘못된 이메일 형식입니다.";
        }
    }
}

// 닉네임 유효성 검사
function validateNickname(e) {
    // 공백이 없다면
    if ( !isEmptyCheck(e) ) {
        highlightError(e, false);
        visibleMakerCheck(e, false);
    }
    // 공백이 있다면 재확인요청
    else {
        highlightError(e, true);
        visibleMakerCheck(e, true);
    }
}

// 비밀번호 유효성 검사
function validatePassword(e) {
    // 공백이 없다면
    if ( !isEmptyCheck(e) ) {
        // 비밀번호 길이가 8자 이상이면
        if ( validatePasswordLength (e.target.value) ) {
            highlightError(e, false);
            visibleMakerCheck(e, false);
        }
        // 비밀번호 길이라 8자 이하라면 재확인요청
        else {
            highlightError(e, true);
            visibleMakerCheck(e, true);
            e.target.nextElementSibling.textContent = "비밀번호를 8자 이상 입력해주세요.";
        }
    }
}

