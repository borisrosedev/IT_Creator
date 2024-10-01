import paragraphComponent from "@components/paragraph/paragraph.component"

class NotificationService {
    private timeoutId: any
    private static instance: NotificationService 

    private constructor(){}
    
    public getInstance() {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService();
          }
          return NotificationService.instance;
    }

    public notify(data:any){
        if(this.timeoutId){
            clearTimeout(this.timeoutId)
        }
        const notification = document.getElementById("notification") as HTMLElement
        notification.innerHTML = paragraphComponent({ content: data.content, classNames: data.type})
        this.timeoutId = setTimeout(() => {
            notification.innerHTML = ""
        }, (data.timeout ?? 5000))
    }
}

export default NotificationService