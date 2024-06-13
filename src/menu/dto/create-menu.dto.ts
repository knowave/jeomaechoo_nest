import { UploadFileDto } from 'src/common/upload-file-dto';

export class CreateMenuDto {
  name: string;
  image: UploadFileDto;
}
