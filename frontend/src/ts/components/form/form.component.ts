import buttonComponent from "@components/button/button.component"

const formField = (data: { id: string, placeholder: string, type?: string, classNames?: string }) => {
    return `
        <article class="form-field">
            <section class="form-field__input-section">
                <label for="${data.id}"></label>
                <input id="${data.id}" type="${data.type ? data.type : 'text'}" placeholder="${data.placeholder ? data.placeholder : 'No placeholder'}">
            </section>
            <section id="${data.id}-error" class="form-field__error-section"></section>
        </article>
    `
}



export default (form: { id: string, fields: Array<any>, buttons: Array<any>}) => {
    return `
        <form id="${form.id}">
            <section class="form__fields-section">
                ${form.fields.map((el) => formField(el)).join("")} 
            </section>
            <section class="form__buttons-section">
                ${form.buttons.map((el) => buttonComponent(el)).join("")}
            </section>
            <section id="${form.id}-error" class="form__errors-section"></section>
        </form>
    `
}