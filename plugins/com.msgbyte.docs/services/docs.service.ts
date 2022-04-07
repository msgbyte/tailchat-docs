import { db, TcContext, TcDbService, TcService } from 'tailchat-server-sdk';
import type { DocDocument, DocModel } from '../models/docs';

/**
 * 云文档服务
 */
interface DocsService extends TcService, TcDbService<DocDocument, DocModel> {}
class DocsService extends TcService {
  get serviceName() {
    return 'plugin:com.msgbyte.docs';
  }

  onInit(): void {
    this.registerLocalDb(require('../models/docs').default);

    this.registerAction('all', this.all);
    this.registerAction('create', this.create);
  }

  async all(ctx: TcContext) {
    const userId = ctx.meta.userId;

    const list = await this.adapter.model.find({
      creator: new db.Types.ObjectId(userId),
    });

    const res = await this.transformDocuments(ctx, {}, list);

    return res;
  }

  async create(ctx: TcContext) {
    const userId = ctx.meta.userId;

    const doc = await this.adapter.model.create({
      creator: new db.Types.ObjectId(userId),
    });

    return {
      docId: String(doc._id),
    };
  }
}

export default DocsService;
