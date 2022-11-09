const itemName = {
    user: "기본 정보",
    score: "과목별 점수 및 평균",
    desiredDate: "컨설팅 날짜",
    consultingOption: "컨설팅 선택 옵션",
    applicationType: "지원 전형",
    reason: "지원 전형 선택 이유",
    reference: "참고 사항",
    routeKnown: "진학 컨설팅 MY UNI를 알게 되신 경로",
    refundAccount: "환불 계좌"
}

function userValidation(user) {
    for(let key in user) {
        if(user[key] === "") {
            return {
                messages: ["기본 정보: 필수 항목입니다."],
                isValid: false
            }
        }
    }
}

function scoreValidation(score) {
    for(let key in score) {
        if (score[key] === "") {
            return {
                messages: ["과목별 점수 및 평균: 필수 항목입니다."],
                isValid: false
            }
        }
    }
}

function uniValidation(uni) {
    const result = {
        messages: [],
        isValid: true
    }
    let listNum = 6;
    if(uni[1].university === "" || uni[1].major === "") {
        result.messages.push("지망 학교 및 학과: 적어도 하나의 지망 학교 및 학과를 써주세요.");
        result.isValid = false;
    }
    for(let i=2; i<=listNum; i++){
        if(uni[i].university === "") uni[i].university = "미정";
        if(uni[i].major === "") uni[i].major = "미정";
    }
    if(uni.reason === ""){
        result.messages.push("학교 및 학과 선정 이유: 필수 항목입니다.");
        result.isValid = false;
    }
    return result;
}

export default function ConsultingRequestValidation(body) {
    const messages = [];
    let isValid = true;
    let result = null;

    for(let key in body){
        if(key === "additionalInfo") continue;
        if(key === "user") {
            result = userValidation(body.user);
        }
        else if(key === "score") {
            result = scoreValidation(body.score);
        }
        else if(key === "uni") {
            result = uniValidation(body.uni);
        }
        else if(body[key].isArray()){
            if(body[key].length === 0){
                result = {
                    messages: [itemName[key] + ": 필수 항목입니다."],
                    isValid: false
                }
            }
        }
        else{
            if(body[key] === ""){
                result = {
                    messages: [itemName[key] + ": 필수 항목입니다."],
                    isValid: false
                }
            }
        }
        if(!result.isValid){
            messages.concat(result.messages);
            isValid = false;
        }
    }

    return {messages, isValid};
}