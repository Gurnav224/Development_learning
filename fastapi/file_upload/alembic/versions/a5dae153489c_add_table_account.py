"""add table account

Revision ID: a5dae153489c
Revises: 18e30bf62884
Create Date: 2025-09-21 15:49:16.888378

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'a5dae153489c'
down_revision: Union[str, Sequence[str], None] = '18e30bf62884'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        'account',
        sa.Column('id', sa.Integer, primary_key=True, index=True),
        sa.Column('name', sa.String(50), index=True, nullable=False),
        sa.Column('email', sa.String(100), unique=True, index=True, nullable=False),
        sa.Column('balance', sa.Float, default=0.0),
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table('account')
