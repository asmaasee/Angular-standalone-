import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService, Setting } from '../../../../shared_models/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settings: Setting[] = [];
  newSetting: Setting = { key: '', value: '' };

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.loadSettings();
  }

  //  تحميل البيانات من localStorage
  loadSettings() {
    const stored = localStorage.getItem('settings');
    this.settings = stored ? JSON.parse(stored) : [];

    //لو عايزة برضو اجيب من الباك اند الوهمي
    // this.settingsService.getSettings().subscribe((data) => {
    //   this.settings = data;
    //   localStorage.setItem('settings', JSON.stringify(data));
    // });
  }

  //  إضافة إعداد وتخزينه في localStorage
  addSetting() {
    if (this.newSetting.key && this.newSetting.value) {
      this.settingsService.addSetting(this.newSetting).subscribe((newItem) => {
        console.log('📦 Added:', newItem);
        this.settings.push(newItem);

        //  نحفظ التحديث في localStorage
        localStorage.setItem('settings', JSON.stringify(this.settings));

        this.newSetting = { key: '', value: '' }; // reset form
      });
    }
  }
}
