/**
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * Author: Nahuel Mingori
 *
 **/

import * as Main from 'resource:///org/gnome/shell/ui/main.js';
const activitiesBtn = Main.panel.statusArea.activities;

export default class HideActivitiesButton {
    enable() {
        if (activitiesBtn) activitiesBtn.hide();
    }

    disable() {
        if (activitiesBtn) activitiesBtn.show();
    }
}