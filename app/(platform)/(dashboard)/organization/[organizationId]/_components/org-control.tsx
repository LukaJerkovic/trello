'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useOrganizationList } from '@clerk/nextjs';

export const OrgControl = () => {
  const parama = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: parama.organizationId as string,
    });
  }, [setActive, parama.organizationId]);

  return null;
};
