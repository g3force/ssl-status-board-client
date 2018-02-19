import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {RefereeMessage} from './RefereeMessage';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class RefereeService {

  private refereeMsg: RefereeMessage;

  constructor() {
  }

  getRefereeMessage(): Observable<RefereeMessage> {
    return of(this.refereeMsg);
  }

  public createWebSocket(url: string): Subject<MessageEvent> {
    const socket = new WebSocket(url);
    const observable = Observable.create(
      (o: Observer<MessageEvent>) => {
        socket.onmessage = o.next.bind(o);
        socket.onerror = o.error.bind(o);
        socket.onclose = o.complete.bind(o);
        return socket.close.bind(socket);
      }
    );
    return Subject.create(null, observable);
  }
}
