import { ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotesService } from '../../service/notes-service';
export declare class NotesComponent implements OnInit {
    private notesSrc;
    private changeDetection;
    allNotes: Array<{
        _id: '';
        name: '';
        content: '';
    }>;
    isEditMode: boolean;
    editData: any;
    constructor(notesSrc: NotesService, changeDetection: ChangeDetectorRef);
    ngOnInit(): void;
    noteForm: FormGroup<{
        name: FormControl<string>;
        content: FormControl<string>;
    }>;
    getNotes(): void;
    createNote(): void;
    editNote(data: any): void;
    deleteNote(data: any): void;
}
