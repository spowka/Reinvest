import { MessageGroupEnum } from '../../../shared/edit-texts/MessageGroupEnum';
export class BlockContext {
  public isLoading: boolean = true;
  public isError: boolean = false;
  public messages: {
    [key: string]: string;
  } = {};
  public get showError() {
    return !this.isLoading && this.isError;
  }
  public get showData() {
    return !this.isLoading && !this.isError;
  }
  constructor(public messageGroup: MessageGroupEnum) {
  }
}
