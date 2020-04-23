import * as types from "../constants/ActionTypes"

export const connectSocketIoPlayer = () => {
    return {
      type: types.CONNECT_SOCKET_IO_PLAYER
    };
  };


export const submitPIN = (nickName,pin)=>{
    return{
        type:types.CLICK_SUBMIT_PIN,
        nickName,
        pin
    }
}

export const saveNewMember = (newMember)=>{
    return{
        type:types.SAVE_NEW_MEMBER_PLAYER,
        newMember
    }
}

export const isJoinRoom = (isJoinRoom)=>{
    return{
        type:types.IS_JOIN_ROOM,
        isJoinRoom
    }
}

export const isPlay = (start)=>{
    return{
        type:types.IS_PLAY,
        start
    }
}
export const loadQuestions = (questions)=>{
    return{
        type:types.LOAD_QUESTIONS,
        questions
    }
}
export const loadQuestion = (numberCurrentQuestion,disableAnswer)=>{
    return{
        type:types.LOAD_QUESTION,
        numberCurrentQuestion,
        disableAnswer
    }
}
export const clickAnswer = (disableAnswer,answersColor)=>{
    return{
        type:types.CLICK_ANSWER,
        disableAnswer,
        answersColor 
    }
}
export const setTimeQuestion = (time) => {
    return {
      type: types.SET_TIME_QUESTION_PLAYER,
      time
    };
  };
  



