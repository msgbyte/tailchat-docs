import { db } from 'tailchat-server-sdk';
const { getModelForClass, prop, modelOptions, TimeStamps } = db;

@modelOptions({
  options: {
    customName: 'p_docs',
  },
})
export class Doc extends TimeStamps implements db.Base {
  _id: db.Types.ObjectId;
  id: string;

  /**
   * 创建者
   */
  @prop({
    index: true,
  })
  creator: db.Types.ObjectId;
}

export type DocDocument = db.DocumentType<Doc>;

const model = getModelForClass(Doc);

export type DocModel = typeof model;

export default model;
