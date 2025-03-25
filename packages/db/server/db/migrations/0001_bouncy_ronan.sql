CREATE TABLE `claim` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`approved` integer,
	`customer` integer,
	`file` integer NOT NULL,
	FOREIGN KEY (`customer`) REFERENCES `customer`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`file`) REFERENCES `file`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `file` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(256),
	`path` text(512),
	`extname` text(16),
	`mimetype` text(32),
	`size` integer NOT NULL
);
