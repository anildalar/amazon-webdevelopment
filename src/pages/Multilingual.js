import React from 'react';
import { useTranslation } from 'react-i18next';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function Multilingual() {
  const { t } = useTranslation();
  return (
    <h1>{t('welcome_to_react')}</h1>
  );
}