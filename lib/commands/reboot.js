/**
 * Reboot command
 *
 * Sends ietf-system:system-restart RPC to reboot the device.
 * Supports Serial, WiFi, and Ethernet transports.
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { postCommand } from './post.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Reboot the device
 * @param {object} options - Command options
 */
export async function rebootCommand(options) {
  const rebootYaml = path.join(__dirname, '../../setup/reboot.yaml');

  if (!fs.existsSync(rebootYaml)) {
    throw new Error(`Reboot YAML not found: ${rebootYaml}`);
  }

  console.log('Rebooting device...');
  await postCommand(rebootYaml, options);
  console.log('Reboot command sent. Device will restart shortly.');
}
