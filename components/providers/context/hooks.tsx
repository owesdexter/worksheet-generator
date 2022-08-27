import { useContext } from 'react';

import { ExporterContext } from './exporter';

export function useExporter () {
  return useContext(ExporterContext);
}