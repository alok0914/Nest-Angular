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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const create_notes_dto_1 = require("../dto/create-notes.dto");
const notes_service_1 = require("../services/notes.service");
let NotesController = class NotesController {
    notesService;
    constructor(notesService) {
        this.notesService = notesService;
    }
    async getAllNotes(response) {
        try {
            const notesData = await this.notesService.findAllNotes();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All notes data found successfully', notesData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async createNote(response, createNotesDto) {
        try {
            const newNote = await this.notesService.createNotes(createNotesDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Note has been created successfully',
                newNote,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Notes not created!',
                error: 'Bad Request'
            });
        }
    }
    async updateNote(response, id, createNotesDto) {
        try {
            const existingNote = await this.notesService.updateNotes(id, createNotesDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Note has been successfully updated',
                existingNote,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    findParticularNote(params) {
        console.log(params.id);
        return `This action returns a #${params.id} note`;
    }
    async deleteNote(response, id) {
        try {
            const deletedNote = await this.notesService.deleteNote(id);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Note deleted successfully',
                deletedNote,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_notes_dto_1.CreateNotesDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "createNote", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_notes_dto_1.CreateNotesDto]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "updateNote", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], NotesController.prototype, "findParticularNote", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NotesController.prototype, "deleteNote", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map