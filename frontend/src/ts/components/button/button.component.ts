export default (data: { content: string, classNames?: string, type: 'submit' | 'reset' | 'button'  }) => {
    return `
        <button class="button ${data.classNames ? data.classNames : ''}" type="${data.type ? data.type : 'button'}">${data.content}</button>
    `
}