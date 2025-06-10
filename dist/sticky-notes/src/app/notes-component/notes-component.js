"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const notes_service_1 = require("../../service/notes-service");
const common_1 = require("@angular/common");
let NotesComponent = class NotesComponent {
    notesSrc;
    changeDetection;
    allNotes = [];
    isEditMode = false;
    editData;
    constructor(notesSrc, changeDetection) {
        this.notesSrc = notesSrc;
        this.changeDetection = changeDetection;
    }
    ngOnInit() {
        this.getNotes();
    }
    noteForm = new forms_1.FormGroup({
        name: new forms_1.FormControl('', forms_1.Validators.required),
        content: new forms_1.FormControl('', forms_1.Validators.required),
    });
    getNotes() {
        this.notesSrc.getNotes().subscribe(notes => {
            this.allNotes = notes?.notes;
        });
    }
    submitNote() {
        if (this.isEditMode) {
            this.editData.name = this.noteForm.value.name;
            this.editData.content = this.noteForm.value.content;
            this.notesSrc.updateNote(this.editData).subscribe((editData) => {
                this.isEditMode = false;
                this.editData = {};
                this.noteForm.reset();
            });
            ;
            ;
        }
        else {
            this.notesSrc.createNotes(this.noteForm.value).subscribe((newItem) => {
                this.allNotes = [...this.allNotes, newItem];
                this.changeDetection.markForCheck();
                this.noteForm.reset();
            });
        }
    }
    editNote(data) {
        this.isEditMode = true;
        this.editData = data;
        this.noteForm.patchValue({ name: data.name, content: data.content });
    }
    deleteNote(data) {
        this.notesSrc.deleteNote(data).subscribe(() => {
            this.allNotes = this.allNotes.filter(note => note?._id !== data?._id);
            this.changeDetection.markForCheck();
        });
    }
};
exports.NotesComponent = NotesComponent;
exports.NotesComponent = NotesComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-notes-component',
        imports: [forms_1.ReactiveFormsModule, common_1.CommonModule],
        templateUrl: './notes-component.html',
        styleUrl: './notes-component.scss',
    }),
    __metadata("design:paramtypes", [notes_service_1.NotesService, core_1.ChangeDetectorRef])
], NotesComponent);
//# sourceMappingURL=notes-component.js.map