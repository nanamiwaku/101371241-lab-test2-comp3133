import { Component } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'] // 'styleUrl' を 'styleUrls' に修正し、配列形式に変更
})
export class MissionfilterComponent {
  years = [2020, 2021, 2022, 2023]; // 実際のデータに合わせて年を置き換えてください

  // onYearSelected メソッドを定義
  onYearSelected(year: string) {
    // ここで年の選択を処理します
    console.log(year); // 選択された年をコンソールに表示（例）
  }
}
