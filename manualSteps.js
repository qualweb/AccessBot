let fail = 0;
let pass = 0;

export default class ManualSteps {
    static fail() {
        return fail;
    }
    static pass() {
        return pass;
    }
    static addToFail() {
        fail++;
    }

    static removeFail() {
        fail--;
    }

    static addToPass() {
        pass++;
    }

    static removePass() {
        pass--;
    }

    static count() {
        return fail + pass;
    }

    constructor(data) {
        this.data = data;
        this._current = this.data[0];
        this.allValues = [this.data[0]];
    }

    next(result) {
        let resultValue;

        if (this._current.status) {
            return this._current;
        }

        if (result === true) {
            resultValue = "answerYes";
        } else {
            resultValue = "answerNo";
        }

        const resultIndex = this.data.findIndex(value => {
            return value.key === this._current[resultValue];
        });

        this.allValues.push(this.data[resultIndex]);
        this._current = this.data[resultIndex];

        if (!this._current.answerYes && !this._current.answerNo) {
            const checkPass = this._current.key.includes("Pass");
            const checkFail = this._current.key.includes("Fail");
            if (checkPass) {
                ManualSteps.addToPass();
                this._current.status = "Pass";
            } else {
                ManualSteps.addToFail();
                this._current.status = "Fail";
            }
        }

        return this._current;
    }

    current() {
        return this._current;
    }

    getQuestion() {
        return this._current.question;
    }

    revert() {
        if (this._current.status && this._current.status === "Pass") {
            ManualSteps.removePass();
        } else if (this._current.status && this._current.status === "Fail") {
            ManualSteps.removeFail();
        }

        this.allValues = [this.allValues[0]];
        this._current = this.allValues[0];
        return this._current;
    }

    prev() {
        if(this.allValues.length === 1) {
            return this._current;
        } 
        const removedValue = this.allValues.pop();

        if(removedValue === "Pass") {
            ManualSteps.removePass();
        }

        if(removedValue === "Fail") {
            ManualSteps.removeFail();
        }

        this._current = this.allValues[this.allValues.length - 1];

        return this._current;
    }

    getStatus() {
        return this._current.status;
    }

    firstElement() {
        return this.allValues.length === 1;
    }
}