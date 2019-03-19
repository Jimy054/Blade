import { Component } from '@angular/core';
import { CdkDragEnter, CdkDropListContainer,CdkDragDrop, moveItemInArray, copyArrayItem,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blade';
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];


 drop(event: CdkDragDrop<object[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }


  delete(event:CdkDragDrop<string[]>){
  	transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex)
  }

    //un borrar es un transferir

/*
  listDrop(e: any){
        // On COPY, clear the selected items in the left ListBoxev
        //if (e.action == 'copy' && e.sourceCtrl && e.sourceCtrl.clearSelection)
            //e.sourceCtrl.clearSelection();

        e.cancel = true;

        if (e.sourceCtrl && e.dragItem && Array.isArray(e.dragItem)){
            e.targetCtrl.suspendLayout();

            for (let i = 0; i < e.dragItem.length; i++){
                let clone = e.sourceCtrl.cloneItem(e.dragItem[i]);

                // Depending on drop position, place the clone item accordingly
               /* switch (e.dropPos){
                    case 1: // Above
                        e.targetCtrl.insertItemBefore(clone, e.targetItem);
                        break;

                    case 2: // Below
                        e.targetCtrl.insertItemAfter(clone, e.targetItem);
                        break;

                    default: // At the end
                        e.targetCtrl.addItem(clone);
                        break;
                }
            }
            
            e.targetCtrl.resumeLayout();
        }
    }


   enter(event: CdkDrag<string[]>) {
   	
    /*if (event.previousContainer === event.container) {
      copyArrayItem(event.container.data, event.targetArray, event.currentIndex,event.targetIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                       event.currentIndex);
    }*/
  
}
