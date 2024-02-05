import Field from "./Field.js"
class Form {
    #fields = [];
    #formElement = document.createElement("form");

    constructor(title) {
        this.title = title;
    }

    addField(field) {
        if (field instanceof Field) {
            this.#fields.push(field);
        }
        else {
            throw new Error("this is not a field")
        }
        return this;
    }

    renderForm() {
        const titleElement = document.createElement("h1");
        titleElement.textContent = this.title;
        this.#formElement.append(titleElement);

        this.#fields.forEach((field) => {
            const fieldElement = field.renderField();
            this.#formElement.append(fieldElement)

        });
        const buttonElement = document.createElement("button");
        buttonElement.type = "submit";
        buttonElement.textContent = "Submit";
        this.#formElement.append(buttonElement);

        document.body.append(this.#formElement)
        this.#formElement.addEventListener("submit", this.#submit.bind(this));

    }

    #submit(e) {
        e.preventDefault();

        const formData = this.#fields.map((field) => {
            return {
                [field.name]: field.value
            };
        });

        const toastElement = document.querySelector("#toast");
        toastElement.classList.add("show");

        toastElement.textContent = formData.map((el) => JSON.stringify(el));

        setTimeout(() => {
            toastElement.classList.remove("show");
        }, 5000);

        return formData;
    }
}

export default Form;