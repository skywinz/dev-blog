'use client';

import React from 'react';
import styled from 'styled-components';
import Tag from '@/components/common/Tag';

interface TagListParams {
    tags: string[];
}

const TagList = (param: TagListParams) => {

    const TagListComponent = param.tags.map(
        (tag, idx) => <Tag key={idx} name={tag} />
    );

    return (
        <Layout>
            {TagListComponent}
        </Layout>
    );
}

export default TagList;

const Layout = styled.div`
    display: flex;
    flex-wrap: wrap;
`;