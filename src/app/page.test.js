import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';

import Page from './page';

jest.mock('next/navigation', () => jest.requireActual('next-router-mock'));

describe('기본 접속 페이지', () => {
  it('기본 페이지 접근 시 /boxoffice 경로로 이동해야 합니다.', () => {
    render(<Page />);

    expect(mockRouter).toMatchObject({ pathname: '/boxoffice' });
  });
});
