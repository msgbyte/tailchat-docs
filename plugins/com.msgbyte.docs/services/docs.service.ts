import { TcService } from 'tailchat-server-sdk';

/**
 * 云文档服务
 */
class DocsService extends TcService {
  get serviceName() {
    return 'plugin:com.msgbyte.docs';
  }

  onInit(): void {
    // TODO
  }
}

export default DocsService;
