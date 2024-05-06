import { AuthLoginDto } from '../../../auth/dto/auth.login.dto';
import { AuthRegisterDto } from '../../../auth/dto/auth.register.dto';
import { CommentCreateDto } from '../../../comments/dto/comment.create.dto';
import { CommentDeleteDto } from '../../../comments/dto/comment.delete.dto';
import { ModerationCommentDto } from '../../../comments/dto/moderation.comment.dto';
import { NumberFindDto } from '../../../numbers/dto/number.find.dto';
import { NumberFindErrorDto } from '../../../numbers/dto/number.find.error.dto';
import { OperatorCreateDto } from '../../../operators/dto/operator.create.dto';
import { ServerStartDto } from '../../../server/dto/server.start.dto';
import { ServerStopDto } from '../../../server/dto/server.stop.dto';
import { UserNumberNotificationDto } from '../../../user-number/dto/user.number.notification.dto';

export type RabbitmqNotificationEventsType =
  keyof RabbitmqNotificationEventType;

// события, которые приходят в очередь для отправки уведомлений
export type RabbitmqNotificationEventType = {
  /**
   * Логин пользователя
   */
  auth_login_user: AuthLoginDto;
  /**
   * Регистрация пользователя после логина
   */
  auth_register_user: AuthRegisterDto;

  /**
   * Удаление комментария
   */
  comment_delete: CommentDeleteDto;

  /**
   * Создание комментария
   */
  comment_create: CommentCreateDto;

  /**
   * поиск номера
   */
  number_find: NumberFindDto;
  /**
   * Ошибка поиск номера.
   * TODO: Добавить передачу текста ошибки
   */
  number_find_error: NumberFindErrorDto;

  /**
   * Создание нового оператора
   */
  operator_create_auto: OperatorCreateDto;

  /**
   * Поиск номера человека пользователя
   */
  users_number_get: UserNumberNotificationDto;

  /**
   * Запуск апи
   */
  service_api_start: ServerStartDto;
  /**
   * Остановка сервера
   */
  service_api_stop: ServerStopDto;

  /**
   * Изменение статуса комментария в модерации
   */
  moderation_comment_number: ModerationCommentDto;
};