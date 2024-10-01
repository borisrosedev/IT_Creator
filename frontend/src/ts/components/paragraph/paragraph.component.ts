export default (data: { content: string, classNames?: string }) => {
    return `
        <p class="${data.classNames ? data.classNames : ''}">${data.content}</p>
    `
}