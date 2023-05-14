import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImageKitClient } from "@platohq/nestjs-imagekit";

@Controller('image')
export class ImageController {
  constructor(private readonly imageKitClient: ImageKitClient) { }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() {
    folder
  }: { folder: string }) {
    try {
      const response = await this.imageKitClient.upload({
        folder,
        file: file.buffer.toString('base64'),
        fileName: file.originalname,
      });
      return response as any;
    } catch (err) {
      throw new Error("Failed to upload file: " + JSON.stringify(err));
    }
  }

  @Delete('/:id')
  async removeImage(@Param('id') id: string) {
    console.log(id);
    try {
      await this.imageKitClient.deleteFile(id);
    } catch (err) {
      throw new Error("Failed to delete image: " + JSON.stringify(err));
    }
  }

  @Delete('/folder/:folderName')
  async removeFolder(@Param('folderName') folderName: string) {
    try {
      await this.imageKitClient.deleteFolder(folderName);
    } catch (err) {
      throw new Error("Failed to delete folder: " + JSON.stringify(err));
    }
  }
}