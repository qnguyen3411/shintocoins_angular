import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shintocoins.service'

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {

  private shintoService = ShintoService.shared
  puzzles = [
    new Puzzle("wats 2 + 3", "5"),
    new Puzzle("wats 3 + 1", "4"),
    new Puzzle("wats 1 + 1", "2")
  ]

  displayingPuzzle: Puzzle
  userAnswer: string

  constructor() { }

  ngOnInit() {
    this.refreshPuzzle();
  }

  tryMine() {
    if (this.displayingPuzzle.answer != this.userAnswer) { return; }
    this.shintoService.mine()
    this.userAnswer = ""
    this.refreshPuzzle();
  }

  refreshPuzzle(){
    const randIndex = Math.trunc(Math.random() * this.puzzles.length);
    this.displayingPuzzle = this.puzzles[randIndex];
  }

}

class Puzzle {
  question: string;
  answer: string;
  constructor(q, a) {
    this.question = q;
    this.answer = a;
  }
}