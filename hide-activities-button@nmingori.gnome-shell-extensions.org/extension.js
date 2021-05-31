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

const Main = imports.ui.main;
const activitiesBtn = Main.panel.statusArea.activities;

function enable() {
    if (activitiesBtn) activitiesBtn.hide();
}

function disable() {
    if (activitiesBtn) activitiesBtn.show();
}
