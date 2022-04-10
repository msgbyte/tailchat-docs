import React from 'react';
import { Translate } from '../translate';
import { useAsyncRequest, showToasts, getServiceUrl } from '@capital/common';
import { Button } from '@capital/component';
import { request } from '../request';
import './index.less';

const ListPanel: React.FC = React.memo(() => {
  const [{ loading }, handleCreate] = useAsyncRequest(async () => {
    const { data } = await request.post('create');
    const docId = data.docId;

    // TODO: 打开该id的文档

    console.log('docId', docId);
    window.open(`${getServiceUrl()}/ep/${docId}`);

    showToasts(Translate.createSuccess, 'success');
  }, []);

  return (
    <div className="plugin-docs-list-panel">
      <Button loading={loading} type="primary" onClick={handleCreate}>
        {Translate.createDoc}
      </Button>
    </div>
  );
});
ListPanel.displayName = 'ListPanel';

export default ListPanel;
