//https://www.w3schools.com/js/js_htmldom_document.asp



let questions = {
    "a_a": {
        "question": "what is the actual name of the programming IDE called 'VSC'?",
        "answer_a": "Virtual Studio Coding",
        "answer_b": "Visual Studio Code",
        "answer_c": "Verified S-Class Coding",
        "correct_answer": "b",
        "points": 200
    },

    "a_b": {
        "question": "someq",
        "answer_a": "a",
        "answer_b": "b",
        "answer_c": "c",
        "correct_answer": "b",
        "points": 300
    },

    "a_c": {
        "question": "someq",
        "answer_a": "a",
        "answer_b": "b",
        "answer_c": "c",
        "correct_answer": "b",
        "points": 500
    },

    "b_a": {
        "question": "someq",
        "answer_a": "a",
        "answer_b": "b",
        "answer_c": "c",
        "correct_answer": "b",
        "points": 200
    },

    "b_b": {
        "question": "someq",
        "answer_a": "a",
        "answer_b": "b",
        "answer_c": "c",
        "correct_answer": "b",
        "points": 300
    },

    "b_c": {
        "question": "someq",
        "answer_a": "a",
        "answer_b": "b",
        "answer_c": "c",
        "correct_answer": "b",
        "points": 500
    }
}


class question {
    constructor(question, answer_a, answer_b, answer_c, correct_answer, p_fca) {
        this.question = question;
        this.p_fca = p_fca;
        this.answer_a = answer_a
        this.answer_b = answer_b
        this.answer_c = answer_c
        this.correct_answer = correct_answer
    }


    addPoints(p_add) {
        p += p_add;
        document.getElementById("points").innerText = p;
    }

    edit_innertext(b_id) {
        document.getElementById(b_id).innerText = this.p_fca;
    }

    call(b_id) {
        document.getElementById(b_id).disabled = true;
        let answer = prompt(this.question + "\na) " + this.answer_a + "\nb) " + this.answer_b + "\nc) " + this.answer_c);
        if (answer == this.correct_answer) {
            alert("Your Answer was Correct!\nYou gained " + this.p_fca + " points!");
            this.addPoints(this.p_fca);
	    document.getElementById(b_id).classList.add("correct");
        } else { 
            alert("Your Answer was Incorrect!");
	    document.getElementById(b_id).classList.add("incorrect");
        }
    }
}

let p = 0;

let qa_a = new question(
    questions.a_a.question,
    questions.a_a.answer_a,
    questions.a_a.answer_b,
    questions.a_a.answer_c,
    questions.a_a.correct_answer,
    questions.a_a.points
);

let qa_b = new question(
    questions.a_b.question,
    questions.a_b.answer_a,
    questions.a_b.answer_b,
    questions.a_b.answer_c,
    questions.a_b.correct_answer,
    questions.a_b.points
);

let qa_c = new question(
    questions.a_c.question,
    questions.a_c.answer_a,
    questions.a_c.answer_b,
    questions.a_c.answer_c,
    questions.a_c.correct_answer,
    questions.a_c.points
);

let qb_a = new question(
    questions.b_a.question,
    questions.b_a.answer_a,
    questions.b_a.answer_b,
    questions.b_a.answer_c,
    questions.b_a.correct_answer,
    questions.b_a.points
);

let qb_b = new question(
    questions.b_b.question,
    questions.b_b.answer_a,
    questions.b_b.answer_b,
    questions.b_b.answer_c,
    questions.b_b.correct_answer,
    questions.b_b.points
);

let qb_c = new question(
    questions.b_c.question,
    questions.b_c.answer_a,
    questions.b_c.answer_b,
    questions.b_c.answer_c,
    questions.b_c.correct_answer,
    questions.b_c.points
);

qa_a.edit_innertext("ba_a");
qa_b.edit_innertext("ba_b");
qa_c.edit_innertext("ba_c");

qb_a.edit_innertext("bb_a");
qb_b.edit_innertext("bb_b");
qb_c.edit_innertext("bb_c");

function a_a() {
    qa_a.call("ba_a");
}

function a_b() {
    qa_b.call("ba_b");
}

function a_c() {
    qa_c.call("ba_c");
}

function b_a() {
    qb_a.call("bb_a");
}

function b_b() {
    qb_b.call("bb_b");
}

function b_c() {
    qb_c.call("bb_c");
}
