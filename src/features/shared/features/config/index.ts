import { getJSON } from '../http/getJSON';

import { createGetConfig } from './createGetConfig';

export const getConfig = createGetConfig(getJSON);
