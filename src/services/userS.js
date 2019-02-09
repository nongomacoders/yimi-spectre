export var User = {
    uid: null,
    firstname: "",
    surname: "",
    school: "",
    grade: "",
    following: [],
    followedBy: [],
    hasProfile:false      
}

export function resetUser() {
    User = {
        uid: null,
        firstname: "",
        surname: "",
        school: "",
        grade: "",
        following: [],
        followedBy: [],
        hasProfile:false      
    }
}