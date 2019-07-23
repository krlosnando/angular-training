import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

//metadata is needed when you want to suse service in another service  (LoggingService in the AccountsService)
//@Injectable() -> this way you show this sth can be injected in here
@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        }
      ];
      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService) {}

      addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
      }

      updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);        
      }
}