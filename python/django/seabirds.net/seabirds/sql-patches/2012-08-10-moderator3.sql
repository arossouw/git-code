BEGIN;
ALTER TABLE cms_post ADD COLUMN _notify_moderator BOOLEAN NOT NULL DEFAULT FALSE;
COMMIT;

